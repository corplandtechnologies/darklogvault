export const ukBanks = [
  "HSBC Holdings",
  "Lloyds Banking Group",
  "Royal Bank of Scotland Group",
  "Barclays",
  "Standard Chartered",
  "Nationwide Building Society",
  "Schroders",
  "Close Brothers Group plc",
  "Santander UK",
  "Coventry Building Society",
  "TSB Bank",
  "Metro Bank",
  "Virgin Money UK",
  "Clydesdale Bank",
  "Co-operative Bank",
  "Yorkshire Bank",
  "Danske Bank",
  "Investec Bank UK",
  "ANZ Bank (Europe) Limited",
  "Vanquis Bank",
  "Credit Suisse UK",
  "HSBC Bank Plc",
  "BIRA Bank",
  "Ulster Bank",
  "Tesco Bank",
  "Tandem Bank",
  "Unity Trust Bank",
  "Halifax Bank",
  "Secure Trust Bank",
  "Sainsbury's Bank",
  "Hampshire Trust Bank",
  "ICBC",
  "Reliance Bank",
  "OneSavings Bank",
  "Alpha Bank",
  "US Metro Bank",
  "Wyelands Bank Plc",
  "Crown Agents Bank",
  "Paragon Bank Plc",
  "Cater Allen Limited",
  "Wesleyan Bank",
  "Gatehouse Bank",
  "Scotiabank Europe",
  "Arbuthnot Latham & Co Limited",
  "Atom Bank plc",
  "Masthaven Bank",
  "AIB Group",
  "Axis Bank UK Limited",
  "PCF Group",
  "Cambridge & Counties Bank Limited",
  "Northern Trust Global",
  "Havin Bank Ltd",
  "COUTTS & COMPANY",
  "Monzo Bank Ltd",
  "ClearBank",
  "National Westminster Bank Plc",
  "Barclays Bank",
  "The Co-operative Bank",
  "Trustee Savings Bank",
  "Starling Bank",
  "OakNorth Bank Plc",
  "Alliance Trust Savings Limited",
  "Royal Bank of Scotland",
];

export const usbanks = [
  "Huntington",
  "Woodforest",
  "JPMorgan Chase",
  "Bank of America",
  "Citigroup Inc",
  "Wells Fargo",
  "Goldman Sachs",
  "Morgan Stanley",
  "Fifth Third Bank",
  "U.S. Bancorp",
  "PNC Financial Services",
  "Capital One Financial",
  "TD Bank",
  "The Bank of New York Mellon",
  "State Street Corporation",
  "SunTrust Bank",
  "Truist Financial",
  "Citizens Financial Group",
  "Ally Financial",
  "KeyBank",
  "M&T Bank",
  "New York Community Bank",
  "Western Alliance Bank",
  "Chime Bank",
  "Heartland Financial USA",
  "BMO Harris Bank",
  "UBS",
  "Mechanics Bank",
  "John Deere Capital Corporation",
  "Sutton Bank",
  "American Express",
  "BNP Paribas / Bank of the West",
  "Umpqua Holdings Corporation",
  "RBC Bank",
  "TIAA",
  "Texas Capital Bank",
  "Ameriprise",
  "Bank of Hawaii",
  "BankUnited",
  "Associated Banc-Corp",
  "Customers Bancorp",
  "Northern Trust",
  "Discover Financial",
  "CIBC Bank USA",
  "South State Bank",
  "Prosperity Bancshares",
  "FNB Corporation",
  "Charles Schwab Corporation",
  "Valley National Bank",
  "United Community Bank",
  "Santander Bank",
  "United Bank (West Virginia)",
  "First Horizon National Corporation",
  "Commerce Bancshares",
  "HSBC Bank USA",
  "Eastern Bank",
  "Sumitomo Mitsui Banking Corporation",
  "Synovus",
  "Home BancShares",
  "PacWest Bancorp",
  "UMB Financial Corporation",
  "Stifel",
  "MUFG Union Bank",
  "Mizuho Financial Group",
  "Central Bancompany",
  "Barclays",
  "KeyCorp",
  "Cullen/Frost Bankers, Inc.",
  "Independent Bank",
  "Pacific Premier Bancorp",
  "Deutsche Bank",
  "Comerica",
  "Credit Suisse",
  "Old National Bank",
  "Ameris Bancorp",
  "Regions Financial Corporation",
  "Simmons Bank",
  "First Citizens BancShares",
  "Glacier Bancorp",
  "Washington Federal",
  "USAA",
  "Popular, Inc.",
  "First BanCorp",
  "Arvest Bank",
  "Synchrony Financial",
  "Cathay Bank",
  "MidFirst Bank",
  "Pinnacle Financial Partners",
  "WSFS Bank",
  "First Interstate BancSystem",
  "Hancock Whitney",
  "SVB Financial Group",
  "Raymond James Financial",
  "Columbia Bank",
  "Fulton Financial Corporation",
  "FirstBank Holding Co",
  "Flagstar Bank",
  "BCI Financial Group",
  "East West Bank",
  "First Hawaiian Bank",
  "Atlantic Union Bank",
  "BOK Financial Corporation",
  "First National of Nebraska",
];

export const canadaBanks = [
  "Scotia Bank",
  "RBC Log",
  "TD Bank",
  "Royal Bank of Canada",
  "Bank Of Nova Scotia",
  "Bank of Montreal",
  "Canadian Imperial Bank of Commerce",
  "National Bank of Canada",
  "Toronto-Dominion Bank",
  "Laurentian Bank of Canada",
  "Canadian Western Bank",
  "Tangerine Bank",
  "HSBC Bank Canada",
  "Bank of Canada",
  "Manulife Bank of Canada",
  "CS Alterna Bank",
  "TD Canada Trust",
  "Desjardins Group",
  "Simplii Financial",
  "Canadian Tire Bank",
  "B2B Bank",
  "First Nations Bank of Canada",
  "Citibank Canada",
  "Bridgewater Bank",
  "Motus Bank",
  "AMEX Bank of Canada",
  "Vancity Community Investment Bank",
];

function generateBankLogs(bankArray: any, numberOfLogs: any) {
  return Array.from({ length: numberOfLogs }, (_, index) => ({
    id: index + 1,
    bankName: bankArray[Math.floor(Math.random() * bankArray.length)],
    balance: `$${(Math.random() * 20000 + 1000).toFixed(2)}`,
    type: ["Saving", "Checking", "Saving + Checking"][
      Math.floor(Math.random() * 3)
    ],
    info: [
      "Bank",
      "Mail Access",
      "Billing",
      "Bank + Mail Access",
      "Bank + Billing",
      "Mail Access + Billing",
      "Bank + Mail Access + Billing",
    ][Math.floor(Math.random() * 7)],
    state: ["CA", "TX", "NY", "FL", "IL", "NV", "WA", "OR", "CO", "KS"][
      Math.floor(Math.random() * 10)
    ],
    gender: ["Male", "Female"][Math.floor(Math.random() * 2)],
    dob: `${Math.floor(Math.random() * 31) + 1}/${
      Math.floor(Math.random() * 12) + 1
    }/${Math.floor(Math.random() * 40) + 1960}`,
    price: generateWeightedPrice(200, 500), // Adjusted line
  }));
}

function generateWeightedPrice(min: any, max: any) {
  const randomValue = Math.random();
  const weight = 0.7; // Adjust this value to control the weighting
  return randomValue ** weight * (max - min) + min;
}

export const ukBanksLogs = generateBankLogs(ukBanks, 2435);
export const usbanksLogs = generateBankLogs(usbanks, 5647);
export const canadaBanksLogs = generateBankLogs(canadaBanks, 3465);

const generateRandomLog = (id: any, type: any) => {
  const balance = `$${(Math.random() * 100000 + 1000).toFixed(2)}`;
  const descriptions: any = {
    dumpsAndPinsData: [
      "Missouri, US, Track 2, Pin, Address",
      "Ohio, US, Track 1, Pin, Address",
      "Wyoming, US, Track 1, Pin, Address",
      "New Jersey, US, Track 2, Pin, Address",
      "Michigan, US, Track 2, Pin, Address",
      "Nebraska, US, Track 1, Pin, Address",
      "Nebraska, US, Track 2, Pin, Address",
      "Wyoming, US, Track 1, Pin, Address",
      "Vermont, US, Track 1, Pin, Address",
    ],
    cashAppData: [
      "Login Credentials + Mail Access + Auth Cookies",
      "Login Credentials + Mail Access + IP Location + Auth Cookies",
    ],
    paypalData: [
      "Login Credentials + Mail Access + IP Location + Auth Cookies",
      "Login Credentials + Mail Access + Auth Cookies",
    ],
  };

  const priceRange: any = {
    dumpsAndPinsData: [300, 2000],
    cashAppData: [400, 500],
    paypalData: [300, 600],
  };

  return {
    id,
    balance,
    description:
      descriptions[type][Math.floor(Math.random() * descriptions[type].length)],
    price: parseFloat(
      Math.round(
        Math.random() * (priceRange[type][1] - priceRange[type][0]) +
          priceRange[type][0]
      ).toFixed(2)
    ),
  };
};

const generateLogs = (type: any, count: any) => {
  return Array.from({ length: count }, (_, index) =>
    generateRandomLog(index + 1, type)
  );
};

// Example usage:
export const dumpsAndPinsData = generateLogs("dumpsAndPinsData", 4535);
export const cashAppData = generateLogs("cashAppData", 3434);
export const paypalData = generateLogs("paypalData", 1345);
