import { urls } from 'setting';


mock.onGet(`${urls.QUERY_AREA_URL}?parentid=51`).reply(200, [
  {"Disabled": false, "Group": null, "Selected": false, "Text": "江苏省", "Value": "9063"}]);


mock.onGet(`${urls.QUERY_AREA_URL}?parentid=9063`).reply(200, [{
  "Disabled": false,
  "Group": null,
  "Selected": false,
  "Text": "南京市",
  "Value": "9064"
},

  {
    "Disabled": false,
    "Group": null,
    "Selected": false,
    "Text": "苏州市",
    "Value": "9111"
  }

]);


mock.onGet(`${urls.QUERY_AREA_URL}?parentid=9064`).reply(200, [{
  "Disabled": false,
  "Group": null,
  "Selected": false,
  "Text": "市辖区",
  "Value": "9065"
}, {"Disabled": false, "Group": null, "Selected": false, "Text": "玄武区", "Value": "9066"}, {
  "Disabled": false,
  "Group": null,
  "Selected": false,
  "Text": "白下区",
  "Value": "9067"
}, {"Disabled": false, "Group": null, "Selected": false, "Text": "秦淮区", "Value": "9068"}, {
  "Disabled": false,
  "Group": null,
  "Selected": false,
  "Text": "建邺区",
  "Value": "9069"
}, {"Disabled": false, "Group": null, "Selected": false, "Text": "鼓楼区", "Value": "9070"}, {
  "Disabled": false,
  "Group": null,
  "Selected": false,
  "Text": "下关区",
  "Value": "9071"
}, {"Disabled": false, "Group": null, "Selected": false, "Text": "浦口区", "Value": "9072"}, {
  "Disabled": false,
  "Group": null,
  "Selected": false,
  "Text": "栖霞区",
  "Value": "9073"
}, {"Disabled": false, "Group": null, "Selected": false, "Text": "雨花台区", "Value": "9074"}, {
  "Disabled": false,
  "Group": null,
  "Selected": false,
  "Text": "江宁区",
  "Value": "9075"
}, {"Disabled": false, "Group": null, "Selected": false, "Text": "六合区", "Value": "9076"}, {
  "Disabled": false,
  "Group": null,
  "Selected": false,
  "Text": "溧水县",
  "Value": "9077"
}, {"Disabled": false, "Group": null, "Selected": false, "Text": "高淳县", "Value": "9078"}]);


mock.onGet(`${urls.QUERY_AREA_URL}?parentid=9111`).reply(200, [{
  "Disabled": false,
  "Group": null,
  "Selected": false,
  "Text": "市辖区",
  "Value": "9112"
}, {"Disabled": false, "Group": null, "Selected": false, "Text": "沧浪区", "Value": "9113"}, {
  "Disabled": false,
  "Group": null,
  "Selected": false,
  "Text": "平江区",
  "Value": "9114"
}, {"Disabled": false, "Group": null, "Selected": false, "Text": "金阊区", "Value": "9115"}, {
  "Disabled": false,
  "Group": null,
  "Selected": false,
  "Text": "虎丘区",
  "Value": "9116"
}, {"Disabled": false, "Group": null, "Selected": false, "Text": "吴中区", "Value": "9117"}, {
  "Disabled": false,
  "Group": null,
  "Selected": false,
  "Text": "相城区",
  "Value": "9118"
}, {"Disabled": false, "Group": null, "Selected": false, "Text": "常熟市", "Value": "9119"}, {
  "Disabled": false,
  "Group": null,
  "Selected": false,
  "Text": "张家港市",
  "Value": "9120"
}, {"Disabled": false, "Group": null, "Selected": false, "Text": "昆山市", "Value": "9121"}, {
  "Disabled": false,
  "Group": null,
  "Selected": false,
  "Text": "吴江市",
  "Value": "9122"
}, {"Disabled": false, "Group": null, "Selected": false, "Text": "太仓市", "Value": "9123"}]);




