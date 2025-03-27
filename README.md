
# Spring 회원가입 프로젝트

Spring 기반으로 만든 회원가입 기능 템플릿 프로젝트입니다.  
프론트엔드와 연동하여 사용자 정보를 처리하는 백엔드 구조입니다.

## 🛠 사용 기술 스택

- Java 17
- Spring Boot
- Gradle
- Spring Web
- Spring Data JPA
- H2 / MySQL (선택 가능)
- Lombok

## 📁 프로젝트 구조

```
src
├── main
│   ├── java
│   │   └── com.example.signup
│   │       ├── controller
│   │       ├── domain
│   │       ├── dto
│   │       ├── repository
│   │       └── service
│   └── resources
│       ├── application.properties
│       └── static / templates
```

## 🚀 실행 방법

```bash
./gradlew bootRun
```

또는 IntelliJ에서 `SignupApplication` 실행

## ✅ 주요 기능

- 회원가입 API
- 사용자 정보 저장
- 입력값 검증 (Validation)
- 간단한 구조의 MSA 연습 기반 가능

---

> 개발자: Nightingale2014  
> 📌 포트폴리오용 백엔드 템플릿으로 활용 가능
