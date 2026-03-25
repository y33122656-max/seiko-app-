// 問題バンク統合ファイル
// 各年度ファイル（qb_r01.js〜qb_r07.js）を先に読み込んでからこのファイルを読み込む
//
// 年度を追加する場合:
//   1. qb_r08.js を作成（QB_R8 = { R8: { label:..., sections:..., questions:{...} } };）
//   2. index.htmlに <script src="qb_r08.js"></script> を追加
//   3. 下のObject.assignにQB_R8を追加
//   4. YEAR_ORDERにR8を追加
//

const QUESTION_BANK = Object.assign({},
  QB_R7,
  QB_R6,
  QB_R5,
  QB_R4,
  QB_R3,
  QB_R2,
  QB_R1,
);
