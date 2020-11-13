package Joole.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import Joole.Model.Product;
import Joole.Service.ProductService;

@RestController
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@PostMapping(value = "/product")
	public ResponseEntity<?> addProduct(@RequestBody Product product) {
		this.productService.addProduct(product);
		return ResponseEntity.ok(HttpStatus.ACCEPTED);
	}
	
	@GetMapping(value = "product/category/{category}")
	public ResponseEntity<?> findByCategory(@PathVariable String category){
		return ResponseEntity.ok(this.productService.findByCategory(category));
	}
	
	@GetMapping(value = "product/subcategory/{subCategory}")
	public ResponseEntity<?> findBySubCategory(@PathVariable String subCategory){
		return ResponseEntity.ok(this.productService.findBySubCategory(subCategory));
	}
	
	@GetMapping(value = "product/category/{category}/subcategory/{subCategory}")
	public ResponseEntity<?> findByCategoryAndSubCategory(@PathVariable String category, @PathVariable String subCategory){
		return ResponseEntity.ok(this.productService.findByCategoryAndSubCategory(category, subCategory));
	}
}
