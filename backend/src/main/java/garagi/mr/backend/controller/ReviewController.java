package garagi.mr.backend.controller;

import garagi.mr.backend.model.Review;
import garagi.mr.backend.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/reviews")
@CrossOrigin("http://localhost:4200/")
public class ReviewController {

    private final ReviewService reviewService;

    @Autowired
    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    // Path: /api/reviews/getAllReviews
    @GetMapping("/getAllReviews")
    public List<Review> getAllReviews() {
        return reviewService.getAllReviews();
    }

    // Path: /api/reviews/getReview/{reviewId}
    @GetMapping("/getReview/{reviewId}")
    public Optional<Review> getReviewById(@PathVariable Integer reviewId) {
        return reviewService.getReviewById(reviewId);
    }

    // Path: /api/reviews/save
    @PostMapping("/save")
    public Review createReview(@RequestBody Review review) {
        return reviewService.createReview(review);
    }

    // Additional methods as needed

    // Path: /api/reviews/delete/{reviewId}
    @DeleteMapping("/delete/{reviewId}")
    public void deleteReview(@PathVariable Integer reviewId) {
        reviewService.deleteReview(reviewId);
    }
}
