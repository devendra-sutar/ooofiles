#!/bin/bash
mysql -u root -p pass@123 <<EOF
create database insta;
use insta;
create table posts(id int , name  varchar(100), last_name  varchar(100));
EOF
