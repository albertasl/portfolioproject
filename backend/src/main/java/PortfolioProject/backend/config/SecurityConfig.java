package PortfolioProject.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .cors().and() // Leisti CORS
                .csrf().disable() // Išjungti CSRF apsaugą, jei nenaudoji formų autentifikacijos
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/users/register").permitAll() // LEIDŽIAME REGISTRACIJĄ BE AUTENTIFIKACIJOS
                        .anyRequest().authenticated() // Kitos užklausos reikalauja autentifikacijos
                )
                .sessionManagement(session -> session
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS) // JWT autentifikacijai
                );

        return http.build();
    }
}
