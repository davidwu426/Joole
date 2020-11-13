package Joole.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Joole.DAO.ProductDAO;
import Joole.Model.Product;

@Service
public class ProductService {
	
	@Autowired
	private ProductDAO productDAO;
	
	
	
	public List<Product> findByCategory(String category){
		return this.productDAO.findByCategory(category);
	}
	
	public List<Product> findByCategoryAndSubCategory(String category, String subCategory){
		return this.productDAO.findByCategoryAndSubCategory(category, subCategory);
	}
	
	public List<Product> findBySubCategory(String subCategory){
		return this.productDAO.findBySubCategory(subCategory);
	}
	
	public void addProduct(Product product) {
		this.productDAO.save(product);
	}
	
	public void deleteProduct(int  id) {
		this.productDAO.deleteById(id);
	}
}
