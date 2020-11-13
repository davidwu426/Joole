package Joole.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Product")
public class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private int id;
	
	@Column(name = "category")
	private String category;
	
	@Column(name = "subCategory")
	private String subCategory;
	
	@Column(name = "manufacturer")
	private String manufacturer;
	
	@Column(name = "model", unique = true)
	private String model;
	
	@Column(name = "series")
	private String series;
	
	@Column(name = "type")
	private String useType;
	
	@Column (name = "application")
	private String application;
	
	@Column (name = "mount_location")
	private String mountLocation;
	
	@Column (name = "accessories")
	private String accessories;
	
	@Column(name = "year")
	private int year;
	
	@Column(name = "airflow")
	private int airflow;
	
	@Column(name = "min_power")
	private double minPower;
	
	@Column(name = "max_power")
	private double maxPower;
	
	@Column(name = "min_fan_speed")
	private int minFanSpeed;
	
	@Column(name = "max_fan_speed")
	private int maxFanSpeed;
	
	@Column (name  = "num_fan_speed")
	private int numFanSpeed;

	@Column(name = "speed_sound")
	private int speedSound;
	
	@Column(name = "min_voltage")
	private int minVoltage;
	
	@Column(name = "max_voltage")
	private int maxVoltage;
	
	@Column(name = "diameter")
	private int diameter;
	
	@Column (name = "min_height")
	private double minHeight;
	
	@Column (name = "max_height")
	private double maxHeight;
	
	@Column(name = "weight")
	private int weight;

	@Column(name = "verified")
	private String verified;
	
	@Column(name = "firm")
	private int firm;
	
	@Column(name = "global")
	private int global;
	
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getSubCategory() {
		return subCategory;
	}

	public void setSubCategory(String subCategory) {
		this.subCategory = subCategory;
	}

	public String getManufacturer() {
		return manufacturer;
	}

	public void setManufacturer(String manufacturer) {
		this.manufacturer = manufacturer;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public String getSeries() {
		return series;
	}

	public void setSeries(String series) {
		this.series = series;
	}

	public String getUseType() {
		return useType;
	}

	public void setUseType(String useType) {
		this.useType = useType;
	}

	public String getApplication() {
		return application;
	}

	public void setApplication(String application) {
		this.application = application;
	}

	public String getMountLocation() {
		return mountLocation;
	}

	public void setMountLocation(String mountLocation) {
		this.mountLocation = mountLocation;
	}

	public String getAccessories() {
		return accessories;
	}

	public void setAccessories(String accessories) {
		this.accessories = accessories;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public int getAirflow() {
		return airflow;
	}

	public void setAirflow(int airflow) {
		this.airflow = airflow;
	}

	public double getMinPower() {
		return minPower;
	}

	public void setMinPower(double minPower) {
		this.minPower = minPower;
	}

	public double getMaxPower() {
		return maxPower;
	}

	public void setMaxPower(double maxPower) {
		this.maxPower = maxPower;
	}

	public int getMinFanSpeed() {
		return minFanSpeed;
	}

	public void setMinFanSpeed(int minFanSpeed) {
		this.minFanSpeed = minFanSpeed;
	}

	public int getMaxFanSpeed() {
		return maxFanSpeed;
	}

	public void setMaxFanSpeed(int maxFanSpeed) {
		this.maxFanSpeed = maxFanSpeed;
	}

	public int getNumFanSpeed() {
		return numFanSpeed;
	}

	public void setNumFanSpeed(int numFanSpeed) {
		this.numFanSpeed = numFanSpeed;
	}

	public int getSpeedSound() {
		return speedSound;
	}

	public void setSpeedSound(int speedSound) {
		this.speedSound = speedSound;
	}

	public int getMinVoltage() {
		return minVoltage;
	}

	public void setMinVoltage(int minVoltage) {
		this.minVoltage = minVoltage;
	}

	public int getMaxVoltage() {
		return maxVoltage;
	}

	public void setMaxVoltage(int maxVoltage) {
		this.maxVoltage = maxVoltage;
	}

	public int getDiameter() {
		return diameter;
	}

	public void setDiameter(int diameter) {
		this.diameter = diameter;
	}

	public double getMinHeight() {
		return minHeight;
	}

	public void setMinHeight(double minHeight) {
		this.minHeight = minHeight;
	}

	public double getMaxHeight() {
		return maxHeight;
	}

	public void setMaxHeight(double maxHeight) {
		this.maxHeight = maxHeight;
	}

	public int getWeight() {
		return weight;
	}

	public void setWeight(int weight) {
		this.weight = weight;
	}

	public String getVerified() {
		return verified;
	}

	public void setVerified(String verified) {
		this.verified = verified;
	}

	public int getFirm() {
		return firm;
	}

	public void setFirm(int firm) {
		this.firm = firm;
	}

	public int getGlobal() {
		return global;
	}

	public void setGlobal(int global) {
		this.global = global;
	}

}
