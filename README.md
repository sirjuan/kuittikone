# Kuittikone

## Background

I had sometimes tried to analyze my spendings in Excel. However it had always proved to be too tedious task to parse the receipts by hand. When I discovered that [S-Ryhmä (S-Group)](https://www.s-kanava.fi/web/s/en/s-ryhma-lyhyesti) offers receipts in PDF-format I decided to make use of it.

## What does it do?

Currently Kuittikone is a web app that:
- Parses through PDF receipt and analyzes it
  - Shop name (also tries to determine shop type)
  - Items (quantity, price, unit price)
  - Total price
  - Date
- Recognizes items that it has already seen
- Item-->Item type-->Item group (for example Banana-->Food-->Living supplies)
  - Possible to add if not found in db
- Saves the receipt to database if it doesn't already exist based on datetime
- Shows Top10 items purchased based on sum of prices or quantity

## Future plans

- More ways to analyze
  - Monthly spending (based on item types or groups)
  - Spending by selected items to help to plan shopping
  - etc.
- Implement a way to manually enter a receipt by other vendors
- Maybe some playing with OCR
  
## How to install and run (development)

```git clone git@github.com:sirjuan/kuittikone.git
cd kuittikone
npm install
npm run start-dev
```
