package garagi.mr.backend.controller;

import garagi.mr.backend.model.User;
import garagi.mr.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }


    @GetMapping("/getAllUsers")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }


    @GetMapping("/getUser/{userId}")
    public Optional<User> getUserById(@PathVariable Integer userId) {
        return userService.getUserById(userId);
    }


    @PostMapping("/save")
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }


    @DeleteMapping("/delete/{userId}")
    public void deleteUser(@PathVariable Integer userId) {
        userService.deleteUser(userId);
    }
}
