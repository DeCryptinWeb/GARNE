// This data is hardcoded hust for testing purposes. Ideally this data should be stored
// in a database.
const footerData = {
  footerLinkName: 'https://github.com/DeCryptinWeb/GARNE',
  footerLinkUrl: 'https://github.com/DeCryptinWeb/GARNE'
}

const resolvers = {
  Query: {
    footerData: () => {
      return footerData
    }
  }
}

export default resolvers
