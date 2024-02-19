package garagi.mr.backend.auth;

import com.fasterxml.jackson.annotation.JsonProperty;
import garagi.mr.backend.user.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {

    @JsonProperty("access_token")
    private String accessToken;
    @JsonProperty("refresh_token")
    private String refreshToken;
    @JsonProperty("role")
    private Role role;
    @JsonProperty("id")
    private Integer id;
}