

WITH
  TopTraders AS (
    SELECT
      BYTEARRAY_LTRIM ("topic2") AS trader_address,
      SUM(BYTEARRAY_TO_UINT256 ("data")) / POWER(10, 18) AS total_value
    FROM
      "goerli"."logs"
    GROUP BY
      BYTEARRAY_LTRIM ("topic2")
    ORDER BY
      total_value DESC
    LIMIT
      10
  )
SELECT
  tt.trader_address,
  l.contract_address AS currency_id,
  SUM(BYTEARRAY_TO_UINT256 (l."data")) / POWER(10, 18) AS total_value
FROM
  "goerli"."logs" l
  INNER JOIN TopTraders tt ON tt.trader_address = BYTEARRAY_LTRIM (l."topic2")
GROUP BY
  tt.trader_address,
  l.contract_address
LIMIT
  10;