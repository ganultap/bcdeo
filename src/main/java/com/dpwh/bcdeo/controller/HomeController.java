package com.dpwh.bcdeo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RequestMapping
@RestController
public class HomeController {
    @GetMapping("/")
	public String test(){
		return "test";
          
	}
}
