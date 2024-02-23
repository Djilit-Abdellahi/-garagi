package garagi.mr.backend.services;


import garagi.mr.backend.dto.UserDTO;
import garagi.mr.backend.model.User;
import garagi.mr.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Get all users
    public List<UserDTO> getAllUsers() {
        List<User> all = userRepository.findAll();
        List<UserDTO> allDTO = all.stream().map(user -> {
            return new UserDTO(user);
        }).toList();
        return allDTO;
    }

    // Get a single user by ID
    public Optional<User> getUserById(Integer userId) {
        return userRepository.findById(userId);
    }

    // Create a new user
    public User createUser(User user) {
        return userRepository.save(user);
    }

    // Update an existing user
//    public User updateUser(Integer userId, User userDetails) {
//        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found with id " + userId));
//        user.setUsername(userDetails.getUsername());
//        user.setEmail(userDetails.getEmail());
//        user.setPasswordHash(userDetails.getPasswordHash());
//        user.setRole(userDetails.getRole());
//        // Set other fields as necessary
//        return userRepository.save(user);
//    }

    // Delete a user
    public void deleteUser(Integer userId) {
        userRepository.deleteById(userId);
    }
}
