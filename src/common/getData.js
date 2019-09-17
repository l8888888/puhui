const baseUrl = 'https://phzzys.phmd247.com/zzys/v1/post/boyili'

export function getSymptom(options){
  let url = baseUrl + "/post/boyili"

  return this.axios({
      url,
      method: "post",
      data: Qs.stringify({
      'ports': "SymTwelve",
      'time': storage.time,
      'name': storage.name,
      'token': storage.token,
      'raw': '{"sex":"'+storage.sex+'"}',
      })
  }).then((res) => {
      console.log(res)
  })
}