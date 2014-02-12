for file in 34/*.csv
do
    temp="${file##*/}"
    tablename="${temp%%.*}"
    #echo $tablename                                                                                                                         

mysql -uroot --password=Jedi21funk CTPP_34 -e "DROP TABLE IF EXISTS ${tablename};CREATE TABLE ${tablename} (geoid varchar(35) NOT NULL, line\
no int(22) DEFAULT NULL,est int(22) DEFAULT NULL,se decimal(15,9) DEFAULT NULL,source varchar(45) DEFAULT NULL,PRIMARY KEY (geoid)) ENGINE=I\
nnoDB DEFAULT CHARSET=utf8;"

mysqlimport  --ignore-lines=1 --fields-terminated-by=, --fields-enclosed-by=\" --columns='geoid,lineno,est,se,source' --local -u root --pass\
word=Jedi21funk CTPP_34 $file
done