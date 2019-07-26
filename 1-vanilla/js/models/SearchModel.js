const data = [
  {
    id: 1,
    name: '[키친르쎌] 홈메이드 칠리소스 포크립 650g',
    image: 'https://scontent-amt2-1.cdninstagram.com/vp/6305709e2403fe81b4231c1f7c0d289f/5D49AD52/t51.2885-15/e35/52633084_1034641770053655_2134802127974168698_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com&se=7&ig_cache_key=MjAwMjA3ODY1NDU0NTU5ODU4Ng%3D%3D.2',
    
  },
  {
    id: 2,
    name: '[키친르쎌] 이탈리아 파티 세트 3~4인분',
    image: 'https://st4.depositphotos.com/6279924/20982/i/1600/depositphotos_209829552-stock-photo-table-full-mediterranean-appetizers-tapas.jpg'
  }
]

export default {
  list(query) {
    return new Promise(res => {
      setTimeout(()=> {
        res(data)
      }, 200);
    })
  }
}