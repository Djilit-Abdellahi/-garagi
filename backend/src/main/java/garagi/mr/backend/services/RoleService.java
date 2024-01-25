package garagi.mr.backend.services;

import garagi.mr.backend.model.Role;
import garagi.mr.backend.repository.RoleRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class RoleService {
    private static final Logger logger = LoggerFactory.getLogger(RoleService.class);
    @Autowired
    private RoleRepository roleRepository;

    public ResponseEntity<List<Role>> getAllRoles() {
        List<Role> roles = roleRepository.findAll();
        return ResponseEntity.ok(roles);
    }

    public ResponseEntity<Role> getRoleById(Integer roleId) {
        Optional<Role> role = roleRepository.findById(roleId);
        return role.map(value -> ResponseEntity.ok(value))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    public ResponseEntity<Role> createRole(Role role) {
        logger.info("Received Role: {}", "name :",role.getRoleName(), "id :",role.getRoleId() );
        Role savedRole = roleRepository.save(role);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedRole);
    }

    public ResponseEntity<Void> deleteRole(Integer roleId) {
        roleRepository.deleteById(roleId);
        return ResponseEntity.noContent().build();
    }
}
