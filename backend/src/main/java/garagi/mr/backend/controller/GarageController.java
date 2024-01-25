package garagi.mr.backend.controller;

import garagi.mr.backend.model.Garage;
import garagi.mr.backend.services.GarageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/garages")
public class GarageController {

    private final GarageService garageService;

    @Autowired
    public GarageController(GarageService garageService) {
        this.garageService = garageService;
    }

    // Path: /api/garages/getAllGarages
    @GetMapping("/getAllGarages")
    public List<Garage> getAllGarages() {
        return garageService.getAllGarages();
    }

    // Path: /api/garages/getGarage/{garageId}
    @GetMapping("/getGarage/{garageId}")
    public Optional<Garage> getGarageById(@PathVariable Integer garageId) {
        return garageService.getGarageById(garageId);
    }

    // Path: /api/garages/save
    @PostMapping("/save")
    public Garage createGarage(@RequestBody Garage garage) {
        return garageService.createGarage(garage);
    }

    // Path: /api/garages/delete/{garageId}
    @DeleteMapping("/delete/{garageId}")
    public void deleteGarage(@PathVariable Integer garageId) {
        garageService.deleteGarage(garageId);
    }
}

