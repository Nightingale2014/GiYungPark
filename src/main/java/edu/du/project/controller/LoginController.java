package edu.du.project.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class LoginController {

    @PostMapping("/login")   // ← 이게 정석!
    @ResponseBody
    public String login(@RequestParam String email,
                        @RequestParam String password) {

        // 💡 테스트용 더미 로그인 로직 (나중에 DB로 대체 가능)
        if(email.equals("test@example.com") && password.equals("1234")) {
            return "✅ 로그인 성공! 환영합니다.";
        } else {
            return "❌ 로그인 실패: 이메일 또는 비밀번호가 틀렸어요.";
        }
    }
}
