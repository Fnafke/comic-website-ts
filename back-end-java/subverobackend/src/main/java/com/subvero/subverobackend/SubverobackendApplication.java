package com.subvero.subverobackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
public class SubverobackendApplication {

	public static void main(String[] args) {
		Dotenv.configure().directory("back-end-java\\subverobackend\\").ignoreIfMissing().load();
		SpringApplication.run(SubverobackendApplication.class, args);
	}

}
