package garagi.mr.backend.controller;

import garagi.mr.backend.model.Role;
import garagi.mr.backend.services.RoleService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/roles")
@CrossOrigin("http://localhost:4200/")
public class RoleController {
    private static final Logger logger = LoggerFactory.getLogger(RoleService.class);

    @GetMapping("/getAllRoles")
    public List<String> getAllRoles() {
        return
                garagi.mr.backend.user.Role.getallRoles();
    }

    @GetMapping("/getRole/{roleId}")
    public Optional<garagi.mr.backend.user.Role> getRoleById(@PathVariable String roleId) {
        return
                garagi.mr.backend.user.Role.getRoleByName(roleId);
    }

}
