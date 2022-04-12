module.exports = {
  async headers() {
    return [
      {
        source: '/studentdata',
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