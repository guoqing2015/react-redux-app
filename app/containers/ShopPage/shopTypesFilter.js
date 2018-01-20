const shopTypesFilter = (shopTypes) => {
  shopTypes.forEach((v) => {
    switch (v.value) {
      case '':
      case null:
        v.value = '不限';
        break;
      case 'sc_industry_1':
        v.value = '超市';
        break;
      case 'sc_industry_2':
        v.value = '服装服饰';
        break;
      case 'sc_industry_3':
        v.value = '餐饮';
        break;
      case 'sc_industry_4':
        v.value = '亲子';
        break;
      case 'sc_industry_5':
        v.value = '娱乐';
        break;
      case 'sc_industry_6':
        v.value = '生活服务';
        break;
    }
  });
  return shopTypes;
};

export default shopTypesFilter;
