let data = [
  {
    "qindex": 0,
    "qname": "今天天气好吗？",
    "qitems":
      {
        "rightAns": "A",
        "qselects": [
          {
            "skey": "A",
            "stxt":"好"
          },
          {
            "skey": "B",
            "stxt":"不好"
          }
        ]
      }

  },

  {
    "qindex": 1,
    "qname": "你吃饭了吗？",
    "qitems":
      {
        "rightAns": "B",
        "qselects": [
          {
            "skey": "A",
            "stxt":"吃了"
          },
          {
            "skey": "B",
            "stxt":"没吃"
          }
        ]
      }

  }
]
export const qlib = () => {

  return data
}

