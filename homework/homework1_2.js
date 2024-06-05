// การบ้าน#2
// ดึงข้อมูล JSON จาก API
fetch('./covid19.json')
  .then(resive => resive.json())
  .then(data => {
    // เก็บข้อมูล JSON ไว้ในตัวแปร allCovidData
    const allCovidData = data;

    // หาผลรวมของ todayRecovered ทั่วโลก
    const resultTodayRecovered = allCovidData.reduce((sum, country) => sum + country.todayRecovered, 0);
    console.log("ผลรวมของ todayRecovered ทั่วโลก:", resultTodayRecovered);

    const totalTodayDeath = allCovidData.filter(country => country.todayDeaths < 10 && country.population > 100000000)
      const result =totalTodayDeath.map(country => country.country);
    console.log("ประเทศที่มี todayDeaths น้อยกว่า 10 และมีจำนวนประชากรมากกว่า 100 ล้านคน:", result);
  });
