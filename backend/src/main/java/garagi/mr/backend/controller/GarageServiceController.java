package garagi.mr.backend.controller;

import garagi.mr.backend.model.GarageService;
import garagi.mr.backend.services.GarageServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/garage-services")
public class GarageServiceController {

    private final GarageServiceService garageServiceService;

    @Autowired
    public GarageServiceController(GarageServiceService garageServiceService) {
        this.garageServiceService = garageServiceService;
    }

    // Path: /api/garage-services/getAllGarageServices
    @GetMapping("/getAllGarageServices")
    public List<GarageService> getAllGarageServices() {
        return garageServiceService.getAllGarageServices();
    }

    // Path: /api/garage-services/getGarageService/{serviceId}
    @GetMapping("/getGarageService/{serviceId}")
    public Optional<GarageService> getGarageServiceById(@PathVariable Integer serviceId) {
        return garageServiceService.getGarageServiceById(serviceId);
    }

    // Path: /api/garage-services/save
    @PostMapping("/save")
    public GarageService createGarageService(@RequestBody GarageService garageService) {
        return garageServiceService.createGarageService(garageService);
    }

    // Additional methods as needed

    // Path: /api/garage-services/delete/{serviceId}
    @DeleteMapping("/delete/{serviceId}")
    public void deleteGarageService(@PathVariable Integer serviceId) {
        garageServiceService.deleteGarageService(serviceId);
    }
}

