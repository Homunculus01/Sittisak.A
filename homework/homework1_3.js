// การบ้าน#3
fetch('./dataJson.json')
  .then(response => response.json())
  .then(jsonData => {
    // กรองข้อมูล JSON เพื่อให้เหลือเฉพาะเพศชายและมีเพื่อนมากกว่าหรือเท่ากับ 2 คน
    const allFriends = jsonData.filter(item => item.gender === "male" && item.friends.length >= 2);

    const mapArray = allFriends.map(item => {
      const { name, gender, company, email, friends, balance } = item;
      return {
        "ชื่อ": name,
        "เพศ": gender,
        "บริษัท": company,
        "Email": email,
        "เพื่อน": friends,
        "เงินในบัญชี": `${(parseFloat(balance.replace('$', '')) / 10).toFixed(2)}`
      };
    });

    console.log(mapArray);
  });
