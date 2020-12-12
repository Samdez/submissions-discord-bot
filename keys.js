const { GoogleSpreadsheet } = require('google-spreadsheet');
const doc = new GoogleSpreadsheet('189P4tqmiP6w2zCh0OCDvj5tklSTDhk035NzgNfHw9Ys');

const auth = async () => {
  await doc.useServiceAccountAuth({
    client_email: "submissions-manager@submissions-manager-297218.iam.gserviceaccount.com",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDGG+5dscD5SIzZ\nSURW3SV3BLy3iV6eiXY3+RH0sw7c1eXcgtcEHnL1AU4kAVQ/xIcwBy+6odbl78v6\nFOII6zg1Cz+ZJw8DvQKcWbdQ71tcwNbUeXZBNf9+vA49yX7gTVRRAeotmfw8hpI2\nONdwGfZIdYkI5eqart61Wj2T8fbUYYYAVecbFrdTNSOo/sauCwfGHLJ4opSk5CLc\nEaLp1Msb0I8nlR3cnBRuj7hMxbKmKGIoPh9u2GmowUTg39CfwuGcL4zxLz5sS+vb\nWdXNNwLMTsyIF4D1EWSFPprkvFuCgQKSybK9C/pmny6mjZaJHGHgMzoqaEqtZbpz\nOvECsbnpAgMBAAECggEAFd0TxbXeGvThjIJsPxzpa1TzwdqwfVUk3aEIlQWk5ITb\nuSYcdjkpDTaPaeRWqLH3DHsijpmZVqeMDqW622qgOaRr6KpZmxtDPD+fflhoMBid\nLPZZsXE06Qb2mGWSMc1++nC4aD94CbL9VGwaBKZs2orULI35Qgh+DiwvIxJ/X+lQ\nTIY1TfrZASkR2f+VAiFSevbr1x7Pd3UGKLwLN5sBcP1sJ2vTpOtQ3+IbD9QrLV6w\n8Iej7uXnNFfpDs7HCIKkgmZVxv7Bs18m9gTfZxS7nukRmU/+DkMgjO5R2YEWJcMN\nvjtAahQgTlPZk/OyT47Y3AWcoF7lfard+RLKaV+8rQKBgQD/1P3lq8jyAmB/V5tD\nR1ysV4umdkrj79BfcSCePtYPjjjLoFhTrSjYoYXYbpXpCZvx34BKB4ujBc8gwb+g\n7Ue4gUughgtFAjA9vKjM2Tw6I5WsrTCgM7eQYkIXCetXeu3e66DqwHtWb0IhEfIv\nv9YVVQ8HDeqr0D6gSHO9EECizQKBgQDGPTxHr7LkwTJm0UWIqtkgqG5rlPNIG2Bs\ngY9tpJbvuY7EunaB1IXeBlxaxyC31U70xp6U3nhnqgeRMOiRw+ykx+5VA/SQr7Cw\nNgE3G/P2lli+pev8//4nj0EL8/v4c7vBHP8v+1erDj/Y1zyGpCPfMlioceNbt9fS\ngQsE+P5LjQKBgELYgE7Wh/bUMCqV1XfK2ageZ9ri5caRDr0hbghrGruNycFK8ElM\n4XNZIQPgQUNWw2x7naW6Ov4psmk4tr1xwl+vSPd0jtVFMR2wgdqkmFwImD86MY5q\ndPhA9EvYx6lf8W9h2fX8vT1kbL7/VWysj1+bjgWl2T9zdimjRLqN2JWxAoGAOh9U\nIDSMf/OBIpIzD+n/tUqM7XADkF2ufMHT2rLKKkk+acG94zz7buhwhZEir6OT/cKK\nVl2P8dzxUQmE9s/5/yo7X6PEPfO1G0UKQC0q716PcH5XXZt02gZvbODBPMw5/VnS\nHDBWOOn5oEsjDNrtRZCOW/zgS1Dwr2B0aaXTcTUCgYEAv85UZFvNJXq2dXTHxjcY\n1vf0x/XbaYEuvGuIigonCdWX4ZXPpntWS4DNTtvfpksMigEtHZHe6bTrDWDaAED5\nYr8tY9JKz+t8YhG0DMowSdJqNdRlz4TFtZeCb8sHn0svTvYAQOaVcVMirITq1sHM\na+xqiyBcmrBcUDc7SX2VRLM=\n-----END PRIVATE KEY-----\n",
  });

  await doc.loadInfo();
}

module.exports = {
  auth: auth(),
  doc: doc
}