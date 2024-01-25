package garagi.mr.backend.services;


//package garagi.mr.backend.services;

import garagi.mr.backend.model.Review;
import garagi.mr.backend.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReviewService {

    private final ReviewRepository reviewRepository;

    @Autowired
    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    // Get all reviews
    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }

    // Get a single review by ID
    public Optional<Review> getReviewById(Integer reviewId) {
        return reviewRepository.findById(reviewId);
    }

    // Create a new review
    public Review createReview(Review review) {
        return reviewRepository.save(review);
    }

    // Delete a review
    public void deleteReview(Integer reviewId) {
        reviewRepository.deleteById(reviewId);
    }
}
