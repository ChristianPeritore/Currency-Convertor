# 💱 Currency Converter App (React)

A simple and responsive **Currency Converter App** built with **React**.  
It fetches real-time exchange rates from the [ExchangeRate API](https://www.exchangerate-api.com/) and allows users to convert between different currencies with ease.

---

## 🚀 Features
- 🌍 **Supports 160+ currencies** (via `countryList` mapping)
- 🇺🇸 **Live country flags** for selected currencies
- ⏳ **Loading state with "waiting..." message** while fetching data
- ⚡ **Instant updates** whenever `From` or `To` currency changes
- 🖱️ **Easy-to-use interface** – just select currencies and type the amount
- 🎨 **Styled with CSS** for a clean, user-friendly UI


## 🛠️ Tech Stack
- **React.js** – Frontend Framework
- **ExchangeRate API** – Live currency data
- **FlagsAPI** – Country flag icons
- **CSS** – Styling

---

## 📦 Installation & Setup

Follow these steps to run the project locally:

### 1️⃣ Clone the repository
git clone https://github.com/simegnew1213/Currency-Convertor.git

### 2️⃣ Navigate to the project folder
cd currency-converter-app

### 3️⃣ Install dependencies
npm install

### 4️⃣ Start the development server
npm run dev
## 🏗️ Future Improvements

- 🔄 Add Swap button to switch From and To currencies

- 💾 Save last used currencies in localStorage

- 📊 Show conversion history

- 📱 Make it fully mobile responsive

## 🧑‍💻 How It Works

- 1️⃣User enters an amount and selects two currencies.

- 2️⃣React useEffect fetches conversion rates for the selected From currency.

- 3️⃣The correct rate for the To currency is extracted and displayed.

- 4️⃣While fetching, the UI shows "waiting..." for better user experience.
## 👨‍💻 Author

Developed by Your Name
Simegnew Aregahegn
