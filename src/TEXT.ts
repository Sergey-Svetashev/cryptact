const TEXT = {
  "Let's start calculating with Cryptact":
    "クリプタクトで計算を始めてみましょう",
  Step: "ステップ",
  Select: "選択する",
  transaction: {
    // Enter transaction information
    title: "取引の情報を入力しましょう",
    // All past transaction history is required to calculate profit and loss in virtual currencies.
    text: "仮想通貨の損益計算には過去すべての取引履歴が必要になります。",
    items: [
      {
        id: "info",
        // Enter a transaction information
        title: "取引の情報を入力しましょう",
        // 13 Exchange/Blockchain selected
        content: "13 取引所/ブロックチェーン選択済み",
        // Please select all exchanges/blockchains you have traded with. Please select “Custom” if you have experience trading on an exchange that is not supported or outside of the exchange.
        text: "取引をしたことのある取引所 / ブロックチェーンをすべて選択してください。対応していない取引所や取引所外での取引経験がある場合は「カスタム」を選択してください。",
      },
      {
        id: "history",
        // Reflect your transaction history
        title: "取引履歴を反映させましょう",
        // You can reflect the history using files or API linkage. DeFi transactions can be automatically identified by entering the wallet address.
        text: "ファイルやAPI連携で履歴を反映させることができます。DeFiの取引はウォレットアドレスを入力することで取引内容まで自動識別することができます。",
      },
    ],
  },
  additional: {
    // Add the missing information
    title: "足りていない情報を追加しましょう",
    // Calculations will not be completed if information is missing. Be sure to add it.
    text: "情報が不足していると計算が完了しません。必ず追加してください。",
    items: [
      {
        id: "requiresId",
        // Eliminate the “required identification” in DeFi transactions
        title: "DeFi取引における「要識別」を解消しましょう",
        // Transactions that could not be automatically identified due to lack of necessary information and deposit/withdrawal transactions other than DeFi transactions will be classified as “requires identification.” Select the transaction type on this page and make it ready for calculation.
        text: "必要な情報が足りていないため、自動で識別できなかった取引や、DeFi取引以外の入出金取引については、「要識別」として分類されます。このページで取引種類を選択し、計算ができる状態にしてください。",
        // Since there is no DeFi transaction, the customer has recognized it as completed.
        info: "お客様はDeFi 取引が無い為、完了したものとして認識しました。",
      },
      {
        id: "unclassified",
        // Eliminate unclassified transactions
        title: "未分類取引を解消しましょう",
        // In the process of aggregating all uploaded transactions, transactions that Cryptact could not process will be classified as “unclassified transactions.” Unclassified transactions are excluded from profit and loss calculations, so be sure to use the wizard function to resolve them.
        text: "アップロードされた全ての取引を集計する過程で、クリプタクトが処理出来なかった取引は、「未分類取引」として分類されます。未分類取引は損益計算から除外されるため、ウィザード機能を活用し必ず解消してください。",
      },
    ],
  },
  results: {
    // Check the calculation results
    title: "計算結果を確認しましょう",
    // Perform a final check of the calculation results and confirm the information required for tax return. Finally you can download the data.
    text: "計算結果の最終的なチェックを行って確定申告に必要な情報を確認しましょう。最後にデータをダウンロードできます。",
  },
  sidebar: {
    // "Quick access"
    title: "クイックアクセス",
    items: [
      {
        // "Entering the balance at the beginning of the year"
        title: "年度初めの残高入力",
        // "Click here if you would like to carry over past calculation results."
        text: "過去の計算結果を引き継いで計算する場合はこちらをクリックしてください。",
      },
      {
        // "Book settings"
        title: "帳簿設定",
        // "You can change settings related to calculation method (grand average method, moving average method), accounting currency, and data finalization."
        text: "計算方法 (総平均法、移動平均法)、会計通貨、データ確定に関する設定の変更ができます。",
      },
    ],
  },
};

export default TEXT;
