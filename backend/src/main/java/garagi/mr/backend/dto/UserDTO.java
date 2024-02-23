package garagi.mr.backend.dto;

import garagi.mr.backend.model.User;
import garagi.mr.backend.user.Role;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UserDTO {
        private Long id;
        private String username;
        private String email;
        private Role role;
        public UserDTO(User user) {
                this.id = user.getUserId();
                this.username = user.getUsername();
                this.email = user.getEmail();
                this.role = user.getRole();
        }
}
