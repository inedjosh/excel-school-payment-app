exports = {
  async headers() {
    return [
      {
        source: '/student',
        headers: [
          
          {
            key: 'Cache-Control',
            value: 'no-cache',
          },
        ],
      },
    ]
  },
}