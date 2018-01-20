export const sexs =  [{value: 1, text: '男'}, {value: 2, text: '女'}];
export const getSex = (value) => {
  let text = "";
  sexs.forEach((v) => {
    if(value == v.value) {
      text = v.text;
    }
  })
  return text;
}
