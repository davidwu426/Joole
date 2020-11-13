package Joole.DAO;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Joole.Model.Product;

@Repository
public interface ProductDAO extends JpaRepository<Product, Integer> {
	
	public List<Product> findByCategoryAndSubCategory(String category, String subCategory);
	public List<Product> findByCategory( String category);
	public List<Product> findBySubCategory(String subCategory);
}
