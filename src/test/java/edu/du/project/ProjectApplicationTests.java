package edu.du.project;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ProjectApplicationTests {

    // 포털 페이지를 보여주는 메서드
    @GetMapping("/home")
    public String home(Model model) {
        model.addAttribute("message", "환영합니다! 포털 페이지입니다.");
        return "home";  // home.html 파일을 반환
    }

    // 게시판 페이지를 보여주는 메서드
    @GetMapping("/board")
    public String board(Model model) {
        model.addAttribute("title", "게시판");
        return "board";  // board.html 파일을 반환
    }
}
