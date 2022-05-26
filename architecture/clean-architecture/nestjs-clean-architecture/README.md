# NestJS with CleanArchitecture

## Requirements Definition

```bash
모든 개발은 REST API형식이며, 데이터베이스 테이블도 제작하셔야합니다.

회원가입, 로그인, 회원정보수정, 상품등록, 상품수정, 상품조회  API를 작성해 보세요.

1) 회원은 단계별 등급으로 구분되어야 합니다. 등급구성은 자유입니다.(최소3단계 ~ 최대 5단계)

예) 관리자, VIP회원, 일반회원

2) 회원정보는 아이디, 패스워드, 회원등급 3가지의 정보로 제작하시면 됩니다.

3) 상품정보는 상품명, 상품가격, 재고 3가지의 정보로 제작하시면 됩니다.

4) 회원 등급별로 볼 수 있는 데이터가 다르게 제작해주시면 됩니다.

예1) 관리자는 상품등록, 상품수정, 상품조회

예2) VIP회원은 VIP전용 상품과 일반상품 조회

예3) 일반회원은 일반회원 전용 상품 조회

5) 상품조회는 로그인 한 회원별로 다른 데이터를 보내주도록 제작해주시면 됩니다.

예) 상품이 VIP회원에만 노출되게 한 후 로그인 사용자가 일반회원이면 접근을 못하도록 권한설정

예) 상품이 VIP회원에만 가격이 다른게 설정
```

- The above requirements are the content of Lawlabs assignments.

### Additional requirements

```bash
- 회원은 상품 주문을 할 수 있습니다.
- 주문을 하게 되면 결제 대기 상태가 됩니다.
- 결제 대기 상태에서는 주문을 취소 할 수 있습니다.
- 결제를 하게 되면 결제 성공 또는 실패가 되고 성공 시 처리 상태로 변경이 됩니다, 실패 시 결제 실패 시 결제 실패 상태로 변경됩니다.
- 처리중 상태에서는 주문 취소가 불가하고, 배송이 완료 되면 완료된 상태로 변경이 됩니다.
- 완료된 상태에서 환불이 가능하며 환불 후 추가 이벤트는 이번 과제에서 구현하지 않습니다.

```

## Previous Implementation

[Lawlabs Assignment With 3-tier Layred Architecture](https://github.com/woo-ming/lawlabs-assignment)

## Architecture Design

## Implementation Order

1. Project Settings
   - nestJS Setting
   - configuration setting
   - database setting with docker ( MySQL8, Redis )
2. Usecase deduction
   - User
     - Register User
     - Update User Grade
     - Update User Information
     - Delete User
   - Product
     - Register Product
     - Update Product
     - Retrieve Product
     - Delete Product
   - Order
     - Register Order
     - Cancel Order
     - Refund Order
     - Complete Order
3. Define domain
   - User Aggregate
     - User
       - userId
       - id
       - password
     - User Grade
       - userId
       - grade (GENERAL, SPECIAL, VIP)
     - UserAuthority
       - userId
       - authority (ADMIN, OPERATOR, GENERAL)
   - Product Aggregate
     - Product
       - productId
       - name
       - price
     - Discount
       - applyGrade
       - discountRate
   - Order Aggregate
     - Order
       - orderId
       - orderDate
       - orderer
       - address
       - status ( PENDING_PAYMENT, FAILED, PROCESSING, COMPLETED, CANCELED, REFUNDED )
     - Orderer
       - orderId
       - name
       - phone
     - OrderProduct
       - orderId
       - productId
       - amount
4.

## Used Tech Stack

- Typescript
- NestJS
- Docker

## Reference

- [Uncle Bob Blog](http://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
