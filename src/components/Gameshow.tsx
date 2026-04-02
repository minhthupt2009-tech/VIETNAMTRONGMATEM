import React, { useState, useMemo, useEffect } from 'react';
import { Trophy, X, CheckCircle, XCircle, ArrowRight, RotateCcw, Gamepad2 } from 'lucide-react';
import { getGeneralQuestions, getProvinceQuestions, GameQuestion } from '../data/questions';
import { Province } from '../data/provinces';

interface GameshowProps {
  mode: 'general' | 'province';
  province: Province | null;
  onClose: () => void;
}

export default function Gameshow({ mode, province, onClose }: GameshowProps) {
  const [gameKey, setGameKey] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const [mcAnswer, setMcAnswer] = useState<string>('');
  const [fillAnswer, setFillAnswer] = useState<string>('');
  const [matchAnswers, setMatchAnswers] = useState<Record<string, string>>({});

  const questions = useMemo(() => {
    if (mode === 'province' && province) {
      return getProvinceQuestions(province);
    }
    return getGeneralQuestions();
  }, [mode, province, gameKey]);

  const question = questions[currentIndex];

  const shuffledRightItems = useMemo(() => {
    if (question && question.type === 'MATCHING') {
      const rights = question.pairs.map(p => p.right);
      return rights.sort(() => Math.random() - 0.5);
    }
    return [];
  }, [question]);

  if (!question) return null;

  const isCorrect = () => {
    if (question.type === 'MULTIPLE_CHOICE') {
      return mcAnswer === question.correctAnswer;
    } else if (question.type === 'FILL_BLANK') {
      return question.correctAnswers.some(ans => ans.toLowerCase() === fillAnswer.trim().toLowerCase());
    } else if (question.type === 'MATCHING') {
      return question.pairs.every(p => matchAnswers[p.left] === p.right);
    }
    return false;
  };

  const handleSubmit = () => {
    if (isCorrect()) {
      setScore(s => s + 1);
    }
    setShowResult(true);
  };

  const handleNext = () => {
    setShowResult(false);
    setMcAnswer('');
    setFillAnswer('');
    setMatchAnswers({});
    
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(i => i + 1);
    } else {
      setIsFinished(true);
    }
  };

  const restartGame = () => {
    setCurrentIndex(0);
    setScore(0);
    setIsFinished(false);
    setShowResult(false);
    setMcAnswer('');
    setFillAnswer('');
    setMatchAnswers({});
    setGameKey(k => k + 1);
  };

  const canSubmit = () => {
    if (question.type === 'MULTIPLE_CHOICE') return mcAnswer !== '';
    if (question.type === 'FILL_BLANK') return fillAnswer.trim() !== '';
    if (question.type === 'MATCHING') return Object.keys(matchAnswers).length === question.pairs.length && Object.values(matchAnswers).every(v => v !== '');
    return false;
  };

  if (isFinished) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4">
        <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 text-center animate-in zoom-in-95 duration-300">
          <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-12 h-12 text-amber-500" />
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Hoàn thành!</h2>
          <p className="text-slate-600 mb-6">Bạn đã trả lời đúng {score} / {questions.length} câu hỏi.</p>
          
          <div className="flex gap-4 justify-center">
            <button
              onClick={restartGame}
              className="flex items-center gap-2 px-6 py-3 bg-blue-100 text-blue-700 font-semibold rounded-xl hover:bg-blue-200 transition-colors"
            >
              <RotateCcw className="w-5 h-5" /> Chơi lại
            </button>
            <button
              onClick={onClose}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="bg-blue-600 p-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-2 font-bold text-lg">
            <Gamepad2 className="w-6 h-6" />
            {mode === 'province' && province ? `Gameshow: ${province.name}` : 'Gameshow Địa Lý Tổng Quát'}
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-blue-700 px-3 py-1 rounded-lg text-sm font-medium">
              Câu {currentIndex + 1} / {questions.length}
            </div>
            <button onClick={onClose} className="hover:bg-blue-700 p-1 rounded-lg transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-1.5 bg-slate-100 w-full">
          <div 
            className="h-full bg-amber-400 transition-all duration-300"
            style={{ width: `${((currentIndex) / questions.length) * 100}%` }}
          />
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 leading-relaxed">
            {question.question}
          </h3>

          <div className="mb-8">
            {question.type === 'MULTIPLE_CHOICE' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {question.options.map(opt => (
                  <button
                    key={opt}
                    disabled={showResult}
                    onClick={() => setMcAnswer(opt)}
                    className={`p-4 rounded-xl border-2 text-left font-medium transition-all ${
                      mcAnswer === opt 
                        ? 'border-blue-500 bg-blue-50 text-blue-700' 
                        : 'border-slate-200 hover:border-blue-300 text-slate-700'
                    } ${showResult && opt === question.correctAnswer ? '!border-emerald-500 !bg-emerald-50 !text-emerald-700' : ''}
                    ${showResult && mcAnswer === opt && mcAnswer !== question.correctAnswer ? '!border-red-500 !bg-red-50 !text-red-700' : ''}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {question.type === 'FILL_BLANK' && (
              <div className="flex flex-col items-center">
                <input
                  type="text"
                  disabled={showResult}
                  className={`w-full max-w-md text-center text-xl p-4 border-b-4 outline-none transition-colors bg-slate-50 rounded-t-xl ${
                    showResult 
                      ? (isCorrect() ? 'border-emerald-500 text-emerald-700' : 'border-red-500 text-red-700')
                      : 'border-blue-500 focus:bg-blue-50'
                  }`}
                  value={fillAnswer}
                  onChange={e => setFillAnswer(e.target.value)}
                  placeholder="Nhập câu trả lời của bạn..."
                />
                {showResult && !isCorrect() && (
                  <p className="mt-4 text-emerald-600 font-medium">
                    Đáp án đúng: {question.correctAnswers[0]}
                  </p>
                )}
              </div>
            )}

            {question.type === 'MATCHING' && (
              <div className="flex flex-col gap-4">
                {question.pairs.map((pair, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="flex-1 font-semibold text-slate-700">{pair.left}</div>
                    <div className="flex-1">
                      <select
                        disabled={showResult}
                        className={`w-full p-3 rounded-lg border-2 outline-none font-medium ${
                          showResult 
                            ? (matchAnswers[pair.left] === pair.right ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-red-500 bg-red-50 text-red-700')
                            : 'border-slate-300 focus:border-blue-500'
                        }`}
                        value={matchAnswers[pair.left] || ''}
                        onChange={e => setMatchAnswers({...matchAnswers, [pair.left]: e.target.value})}
                      >
                        <option value="" disabled>-- Chọn vùng tương ứng --</option>
                        {shuffledRightItems.map(r => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                ))}
                {showResult && !isCorrect() && (
                  <div className="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                    <p className="font-bold text-emerald-800 mb-2">Đáp án đúng:</p>
                    <ul className="list-disc list-inside text-emerald-700 space-y-1">
                      {question.pairs.map((p, i) => (
                        <li key={i}>{p.left} ➔ {p.right}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {showResult && (
              isCorrect() ? (
                <div className="flex items-center gap-2 text-emerald-600 font-bold animate-in slide-in-from-left-4">
                  <CheckCircle className="w-6 h-6" /> Chính xác!
                </div>
              ) : (
                <div className="flex items-center gap-2 text-red-500 font-bold animate-in slide-in-from-left-4">
                  <XCircle className="w-6 h-6" /> Chưa đúng!
                </div>
              )
            )}
          </div>
          
          {!showResult ? (
            <button
              disabled={!canSubmit()}
              onClick={handleSubmit}
              className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Kiểm tra
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-8 py-3 bg-amber-500 text-white font-bold rounded-xl hover:bg-amber-600 transition-all animate-in zoom-in-95"
            >
              {currentIndex < questions.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả'} <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
