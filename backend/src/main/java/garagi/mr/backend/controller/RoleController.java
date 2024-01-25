package garagi.mr.backend.controller;

import garagi.mr.backend.model.Role;
import garagi.mr.backend.services.RoleService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/roles")
public class RoleController {
    private static final Logger logger = LoggerFactory.getLogger(RoleService.class);
    @Autowired
    private RoleService roleService;

    @GetMapping("/getAllRoles")
    public ResponseEntity<List<Role>> getAllRoles() {
        return roleService.getAllRoles();
    }

    @GetMapping("/getRole/{roleId}")
    public ResponseEntity<Role> getRoleById(@PathVariable Integer roleId) {
        return roleService.getRoleById(roleId);
    }

    @PostMapping("/save")
    public ResponseEntity<Role> createRole(@RequestBody Role role) {
        logger.info("Controllers " ,role.getRoleName());
        return roleService.createRole(role);
    }

    @DeleteMapping("/delete/{roleId}")
    public ResponseEntity<Void> deleteRole(@PathVariable Integer roleId) {
        return roleService.deleteRole(roleId);
    }
}
