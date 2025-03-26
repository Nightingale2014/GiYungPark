package edu.du.project.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PortalController {

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("message", "환영합니다! 포털 페이지입니다.");
        return "index";  // index.html을 찾아감
    }
}
