USE trybecashdb;

CREATE TABLE order (
    id INT NOT NULL AUTO_INCREMENT,
    item_name VARCHAR(45) NOT NULL,
    person_asked VARCHAR(45) NOT NULL,
    exact_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    item_price DECIMAL(10,2) NOT NULL,
    quantity INT NOT NULL,
    total_price  
    PRIMARY KEY(id)
);

CREATE TABLE months(
    id INT NOT NULL AUTO_INCREMENT,
    month_name VARCHAR(45) NOT NULL,
    month_number INT NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO months
    (`month_name`, `month_number`)
VALUES
    ('Janeiro', 01),
    ('Fevereiro', 02),
    ('Marco', 03),
    ('Abril', 04),
    ('Maio', 05),
    ('Junho', 06),
    ('Julho', 07),
    ('Agosto', 08),
    ('Setembro', 09),
    ('Outubro', 10),
    ('Novembro', 11),
    ('Dezembro', 12);

CREATE TABLE months_orders (
    month_order_id INT NOT NULL AUTO_INCREMENT,
    month_id INT NOT NULL,
    order_id INT NOT NULL,
    PRIMARY KEY (month_order_id),
    FOREIGN KEY (month_id) REFERENCES months(id),
    FOREIGN KEY (order_id) REFERENCES items(id)
);