export interface ClimateDataPoint {
  month: string;
  temp: number;
  rain: number;
}

export function getClimateDataByRegion(region: string): ClimateDataPoint[] {
  const months = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'];
  
  if (region.includes('Đồng bằng sông Cửu Long') || region.includes('Đông Nam Bộ')) {
    // Miền Nam: Nóng quanh năm, 2 mùa mưa khô rõ rệt
    const temps = [26, 27, 28, 29, 28, 27, 27, 27, 27, 27, 27, 26];
    const rains = [10, 5, 15, 50, 200, 300, 320, 280, 330, 260, 100, 30];
    return months.map((m, i) => ({ month: m, temp: temps[i], rain: rains[i] }));
  }
  
  if (region.includes('Tây Nguyên')) {
    // Tây Nguyên: Mát mẻ hơn, mùa mưa từ tháng 5-10
    const temps = [20, 22, 23, 24, 23, 22, 22, 22, 22, 21, 20, 19];
    const rains = [5, 10, 30, 80, 220, 280, 300, 320, 290, 150, 50, 15];
    return months.map((m, i) => ({ month: m, temp: temps[i], rain: rains[i] }));
  }
  
  if (region.includes('Duyên hải Nam Trung Bộ')) {
    // Nam Trung Bộ: Mùa mưa lệch về thu đông (tháng 9-12)
    const temps = [24, 25, 26, 28, 29, 29, 29, 29, 28, 27, 26, 24];
    const rains = [40, 20, 20, 30, 60, 80, 90, 120, 300, 500, 350, 120];
    return months.map((m, i) => ({ month: m, temp: temps[i], rain: rains[i] }));
  }
  
  if (region.includes('Bắc Trung Bộ')) {
    // Bắc Trung Bộ: Mùa đông lạnh, mùa hè nóng, mưa nhiều vào thu đông
    const temps = [18, 19, 21, 24, 28, 29, 29, 28, 26, 24, 21, 19];
    const rains = [50, 40, 50, 60, 100, 120, 130, 200, 450, 550, 250, 100];
    return months.map((m, i) => ({ month: m, temp: temps[i], rain: rains[i] }));
  }
  
  if (region.includes('Đồng bằng sông Hồng') || region.includes('Trung du và miền núi phía Bắc')) {
    // Miền Bắc: 4 mùa rõ rệt, mùa đông lạnh ít mưa, mùa hè nóng mưa nhiều
    const temps = [16, 17, 20, 24, 27, 29, 29, 28, 27, 24, 21, 18];
    const rains = [20, 25, 40, 90, 180, 240, 280, 300, 220, 130, 50, 20];
    return months.map((m, i) => ({ month: m, temp: temps[i], rain: rains[i] }));
  }
  
  // Default (Average Vietnam)
  const temps = [21, 22, 24, 26, 27, 28, 28, 28, 27, 25, 23, 21];
  const rains = [30, 25, 40, 80, 180, 250, 280, 290, 250, 180, 80, 40];
  return months.map((m, i) => ({ month: m, temp: temps[i], rain: rains[i] }));
}
