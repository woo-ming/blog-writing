# SQL Tutorial

# 1. Data Types

> 데이터 베이스 테이블의 각 열에는 열의 이름과 데이터 타입을 가지고 있습니다.
> 테이블을 생성할 때 각 열에 저장할 데이터 타입을 반드시 결정해야 합니다.

> MySQL 에서는 아래의 3가지의 주요 데이터 타입이 있습니다.
>
> - String
> - Numeric
> - Date And Time

## 1-1. String Type

| Data Type             | Description                                                                                                                                                                                                |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CHAR(size)            | 고정된 길이의 문자열 입니다( 문자,숫자, 특수문자를 포함할 수 있습니다 ). 0 ~ 255 (2^8)크기를 가질 수 있습니다. 기본은 1입니다.                                                                             |
| VARCHAR(size)         | 가변 길이의 문자열 입니다( 문자,숫자, 특수문자를 포함할 수 있습니다 ). 0~65535 (2^16)크기를 가질 수 있습니다.                                                                                              |
| BINARY(size)          | CHAR()와 동일하지만 2진 바이트로 문자열을 저장합니다. size 파라미터는 열 길이를 바이트 단위로 지정할 수 있습니다. 기본은 1                                                                                 |
| VARBINARY(size)       | VARCHAR와 동일하지만 2진 바이트로 문자열을 저장합니다. size 파라미터는 열 길이를 바이트 단위로 지정할 수 있습니다.                                                                                         |
| TINYBLOB              | BLOBs (Binary Large Objects) 위한 타입 입니다. 최대 길이 255(2^8 크기)의 바이트를 저장할 수 있습니다.                                                                                                      |
| TINYTEXT              | 최대 길이가 255(2^8 크기)인 가변 크기의 문자열을 저장할수 있습니다.                                                                                                                                        |
| TEXT (size)           | 최대 길이가 655359(2^16 크기)인 가변 크기의 문자열을 저장할수 있습니다.                                                                                                                                    |
| BLOB(size)            | BLOBs (Binary Large Objects)를 위한 타입입니다. 최대길이 655359(2^16 크기) 의 바이트를 저장할 수 있습니다.                                                                                                 |
| MEDIUMTEXT            | 최대 길이가 16777216(2^24 크기)인 가변 크기의 문자열을 저장할수 있습니다.                                                                                                                                  |
| MEDIUMBLOB            | BLOBs (Binary Large Objects)를 위한 타입입니다. 최대길이 16777216(2^24 크기) 의 바이트를 저장할 수 있습니다.                                                                                               |
| LONGTEXT              | 최대 길이가 4294967295(2^32 크기)인 가변 크기의 문자열을 저장할수 있습니다.                                                                                                                                |
| LONGBLOB              | BLOBs (Binary Large Objects)를 위한 타입입니다. 최대길이 4294967295(2^32 크기) 의 바이트를 저장할 수 있습니다.                                                                                             |
| ENUM(val1, val2, ...) | 가능한 값 목록에서 선택한 하나의 값만 가질 수 있는 문자열 개체입니다. ENUM 목록에 최대 65535개의 값을 나열할 수 있습니다. 목록에 없는 값이 삽입되면 공백 값이 삽입됩니다. 값은 입력한 순서대로 정렬됩니다. |
| SET(va1, val2, ...)   | 가능한 값 목록에서 선택한 0개 이상의 값을 가질 수 있는 문자열 개체입니다. SET 목록에 최대 64개의 값을 나열할 수 있습니다.                                                                                  |

## 1-2. Numeric Data Types

| Data Type        | Description                                                                                                                                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BIT(size)        | bit 값의 타입입니다. 값당 비트 수는 size입력 크기로 지정됩니다. size는 1 ~ 64 까지 가질 수 있으며 기본 size는 1입니다.                                                                                        |
| TINYINT(size)    | signed 기준으로 -128 ~ 127 까지의 범위를 가진 정수 입니다. ( 8 bit ) size는 단순히 표시되는 자릿수를 의미합니다. 최대 255까지 지정할 수 있습니다.                                                             |
| BOOL             | 0은 false이고, 그외 값은 true로 간주됩니다.                                                                                                                                                                   |
| BOOLEAN          | BOOL 타입과 동일합니다.                                                                                                                                                                                       |
| SMALLINT(size)   | signed 기준으로 -32768 ~ 32767 까지의 범위를 가진 정수 입니다. ( 16 bit ) size는 단순히 표시되는 자릿수를 의미합니다. 최대 255까지 지정할 수 있습니다.                                                        |
| MEDIUMINT(size)  | signed 기준으로 -8388608 ~ 8388607 까지의 범위를 가진 정수 입니다. ( 24 bit ) size는 단순히 표시되는 자릿수를 의미합니다. 최대 255까지 지정할 수 있습니다.                                                    |
| INT(size)        | signed 기준으로 -2147483648 ~ 2147483647 까지의 범위를 가진 정수 입니다. ( 32 bit ) size는 단순히 표시되는 자릿수를 의미합니다. 최대 255까지 지정할 수 있습니다.                                              |
| INTEGER(size)    | INT 타입과 동일합니다.                                                                                                                                                                                        |
| BIGINT(size)     | signed 기준으로 -9223372036854775808 ~ 9223372036854775807 까지의 범위를 가진 정수 입니다. ( 64 bit ) size는 단순히 표시되는 자릿수를 의미합니다. 최대 255까지 지정할 수 있습니다.                            |
| FLOAT(size, d)   | deprecated on MySQL 8.0.17                                                                                                                                                                                    |
| FLOAT(p)         | 부동 소수점 숫자 타입은 MySQL에서 p 값에 따라 FLOAT 또는 DOUBLE을 결정 합니다. p가 0 ~ 24이면 FLOAT유형이고 25~ 53이면 DOUBLE이 됩니다.                                                                       |
| DOUBLE(size, d)  | deprecated on MySQL 8.0.17                                                                                                                                                                                    |
| DECIMAL(size, d) | 정확한 고정 소수점 수 입니다. 전체 자릿수는 size 값으로 지정됩니다. 소수점 이하 자릿수는 d에 의해 지정이 됩니다. size 값의 최대 수는 65입니다. d의 최대 수는 30 입니다. 기본 size의 값음 10이고 d는 0 입니다. |
| DEC(size, d)     | DECIMAL 타입과 동일합니다.                                                                                                                                                                                    |

> Info: 모든 숫자 데이터 유형에는 UNSIGNED 또는 ZEROFILL 과 같은 추가 옵션이 있을 수 있습니다.
> UNSIGNED 옵셥을 추가하면 MySQL은 열에 대해 음수 값을 허용 하지 않습니다.
> ZEROFILL 옵션을 추가하면 MySQL은 자릿수가 괄호 안의 수보다 작을때 자동으로 자릿수를 다 0으로 채웁니다.

## 1-3. Date and Time Data Types

| Data Type      | Description                                                                                                                                                                                                                                                                               |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DATE           | YYYY-MM-DD의 포멧을 가진 날짜 타입입니다. '1000-01-01'부터 '9999-12-31'일 까지의 기간을 지원 합니다.                                                                                                                                                                                      |
| DATETIME(fsp)  | YYYY-MM-DD hh:mm:ss의 포멧을 가진 날짜와 시간의 조합 입니다. '1000-01-01 00:00:00'부터 '9999-12-31'일 까지의 기간을 지원 합니다. DEFAULT값을 지정할 수 있고 업데이트 시 자동으로 날짜가 세팅되는 ON UPDATE를 설정 할 수 있습니다.                                                         |
| TIMESTAMP(fsp) | Timestamp 의 값은 숫자형으로 유닉스가 개발된 시대인 '1970-01-01 00:00:01'UTC 부터 저장이 됩니다. 지원하는 기간은 '1970-01-01 00:00:01'UTC 부터 '2038-01-09 00:00:01'UTC 까지 지원합니다. DEFAULT값을 지정할 수 있고 업데이트 시 자동으로 날짜가 세팅되는 ON UPDATE를 설정 할 수 있습니다. |
| TIME(fsp)      | hh:mm:ss의 포멧을 가진 시간 타입입니다. -838:59:59 ~ 838:59:59 까지 지원합니다.                                                                                                                                                                                                           |
| Year           | 4자리 형식의 연도 입니다. Year은 2901 ~ 2155 까지 그리고 0000을 허용합니다. MySQL8.0 부터는 2자리의 연도 포멧을 지원하지 않습니다.                                                                                                                                                        |

> Info: Timestamp는 DateTime과 다르게 Timezone의 영향을 받습니다.

> Info: UTC (Universal Time Coordinated) 는 1972년 1월 1일부터 시행된 국제 표준시이며, 1970년 1월 1일 자정을 0 밀리초로 설정하여 기준을 삼아 그 후로 시간의 흐름을 밀리초로 계산한다. UTC는 국제원자시와 윤초 보정을 기반으로 표준화되었다.

## 1-4. Spatial Data Type, Json Type

> MySQL8 에서는 위 타입들을 제외하고 공간데이터 타입과 JSON 타입을 지원하고 있다.

# References

- [MySQL Documentation]("https://dev.mysql.com/doc/refman/8.0/en/data-types.html")
- [W3Schools]("https://www.w3schools.com/sql/sql_intro.asp")
- [Wikipedia]("https://ko.wikipedia.org/wiki/%ED%98%91%EC%A0%95_%EC%84%B8%EA%B3%84%EC%8B%9C")