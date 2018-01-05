# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
user1 = User.new(email: "luis", password: "password", image_url: "test")
user2 = User.new(email: "mauricio", password: "password", image_url: "test")
user3 = User.new(email: "uyaguari", password: "password", image_url: "test")
user4 = User.new(email: "chica", password: "password", image_url: "test")
user5 = User.new(email: "nanci", password: "password", image_url: "test")
user6 = User.new(email: "german", password: "password", image_url: "test")
user7 = User.new(email: "dylan", password: "password", image_url: "test")
user8 = User.new(email: "javier", password: "password", image_url: "test")
user9 = User.new(email: "jason", password: "password", image_url: "test")
user10 = User.new(email: "steven", password: "password", image_url: "test")
user11 = User.new(email: "martha", password: "password", image_url: "test")
user12 = User.new(email: "cristina", password: "password", image_url: "test")
user13 = User.new(email: "jayden", password: "password", image_url: "test")
user14 = User.new(email: "ashely", password: "password", image_url: "test")

user1.save!
user2.save!
user3.save!
user4.save!
user5.save!
user6.save!
user7.save!
user8.save!
user9.save!
user10.save!
user11.save!
user12.save!
user13.save!
user14.save!


Friendship.destroy_all

friendship1 = Friendship.new(requester_id: user1.id, friend_id: user2.id)
friendship2 = Friendship.new(requester_id: user1.id, friend_id: user3.id)
friendship3 = Friendship.new(requester_id: user1.id, friend_id: user4.id)
friendship4 = Friendship.new(requester_id: user1.id, friend_id: user5.id)

friendship5 = Friendship.new(requester_id: user6.id, friend_id: user1.id)
friendship6 = Friendship.new(requester_id: user7.id, friend_id: user1.id)
friendship7 = Friendship.new(requester_id: user8.id, friend_id: user1.id)
friendship8 = Friendship.new(requester_id: user9.id, friend_id: user1.id)


friendship9 = Friendship.new(requester_id: user2.id, friend_id: user3.id)
friendship10 = Friendship.new(requester_id: user2.id, friend_id: user4.id)
friendship11 = Friendship.new(requester_id: user2.id, friend_id: user5.id)

friendship12 = Friendship.new(requester_id: user6.id, friend_id: user2.id)
friendship13 = Friendship.new(requester_id: user7.id, friend_id: user2.id)
friendship14 = Friendship.new(requester_id: user8.id, friend_id: user2.id)

friendship1.save!
friendship2.save!
friendship3.save!
friendship4.save!
friendship5.save!
friendship6.save!
friendship7.save!
friendship8.save!
friendship9.save!
friendship10.save!
friendship11.save!
friendship12.save!
friendship13.save!
friendship14.save!


user15 = User.new(email: "ljc" , password: "password", image_url: "test")
user16 = User.new(email: "dvx" , password: "password", image_url: "test")
user17 = User.new(email: "or" , password: "password", image_url: "test")
user18 = User.new(email: "gkx" , password: "password", image_url: "test")
user19 = User.new(email: "iur" , password: "password", image_url: "test")
user20 = User.new(email: "fxk" , password: "password", image_url: "test")
user21 = User.new(email: "hfn" , password: "password", image_url: "test")
user22 = User.new(email: "nsc" , password: "password", image_url: "test")
user23 = User.new(email: "jjj" , password: "password", image_url: "test")
user24 = User.new(email: "dqn" , password: "password", image_url: "test")
user25 = User.new(email: "cha" , password: "password", image_url: "test")
user26 = User.new(email: "iiv" , password: "password", image_url: "test")
user27 = User.new(email: "ib" , password: "password", image_url: "test")
user28 = User.new(email: "hhe" , password: "password", image_url: "test")
user29 = User.new(email: "jys" , password: "password", image_url: "test")
user30 = User.new(email: "fkc" , password: "password", image_url: "test")
user31 = User.new(email: "itk" , password: "password", image_url: "test")
user32 = User.new(email: "qe" , password: "password", image_url: "test")
user33 = User.new(email: "maa" , password: "password", image_url: "test")
user34 = User.new(email: "for" , password: "password", image_url: "test")
user35 = User.new(email: "aog" , password: "password", image_url: "test")
user36 = User.new(email: "izs" , password: "password", image_url: "test")
user37 = User.new(email: "ntc" , password: "password", image_url: "test")
user38 = User.new(email: "kbh" , password: "password", image_url: "test")
user39 = User.new(email: "frb" , password: "password", image_url: "test")
user40 = User.new(email: "mes" , password: "password", image_url: "test")
user41 = User.new(email: "nmy" , password: "password", image_url: "test")
user42 = User.new(email: "cpd" , password: "password", image_url: "test")
user43 = User.new(email: "jvw" , password: "password", image_url: "test")
user44 = User.new(email: "mfh" , password: "password", image_url: "test")
user45 = User.new(email: "lrp" , password: "password", image_url: "test")
user46 = User.new(email: "bhg" , password: "password", image_url: "test")
user47 = User.new(email: "kro" , password: "password", image_url: "test")
user48 = User.new(email: "lst" , password: "password", image_url: "test")
user49 = User.new(email: "klu" , password: "password", image_url: "test")
user50 = User.new(email: "dhy" , password: "password", image_url: "test")
user51 = User.new(email: "bj" , password: "password", image_url: "test")
user52 = User.new(email: "fjv" , password: "password", image_url: "test")
user53 = User.new(email: "jnt" , password: "password", image_url: "test")
user54 = User.new(email: "giz" , password: "password", image_url: "test")
user55 = User.new(email: "elx" , password: "password", image_url: "test")
user56 = User.new(email: "dkw" , password: "password", image_url: "test")
user57 = User.new(email: "bke" , password: "password", image_url: "test")
user58 = User.new(email: "fiz" , password: "password", image_url: "test")
user59 = User.new(email: "jvz" , password: "password", image_url: "test")
user60 = User.new(email: "sr" , password: "password", image_url: "test")
user61 = User.new(email: "ggq" , password: "password", image_url: "test")
user62 = User.new(email: "jmc" , password: "password", image_url: "test")
user63 = User.new(email: "cqb" , password: "password", image_url: "test")
user64 = User.new(email: "eou" , password: "password", image_url: "test")
user65 = User.new(email: "lsq" , password: "password", image_url: "test")
user66 = User.new(email: "gnu" , password: "password", image_url: "test")
user67 = User.new(email: "gki" , password: "password", image_url: "test")
user68 = User.new(email: "ipz" , password: "password", image_url: "test")
user69 = User.new(email: "dac" , password: "password", image_url: "test")
user70 = User.new(email: "iui" , password: "password", image_url: "test")
user71 = User.new(email: "jvp" , password: "password", image_url: "test")
user72 = User.new(email: "gbg" , password: "password", image_url: "test")
user73 = User.new(email: "lpu" , password: "password", image_url: "test")
user74 = User.new(email: "dtx" , password: "password", image_url: "test")
user75 = User.new(email: "fxm" , password: "password", image_url: "test")
user76 = User.new(email: "gqj" , password: "password", image_url: "test")
user77 = User.new(email: "exs" , password: "password", image_url: "test")
user78 = User.new(email: "azk" , password: "password", image_url: "test")
user79 = User.new(email: "lfz" , password: "password", image_url: "test")
user80 = User.new(email: "bjd" , password: "password", image_url: "test")
user81 = User.new(email: "hvj" , password: "password", image_url: "test")
user82 = User.new(email: "djo" , password: "password", image_url: "test")
user83 = User.new(email: "bqv" , password: "password", image_url: "test")
user84 = User.new(email: "jex" , password: "password", image_url: "test")
user85 = User.new(email: "msx" , password: "password", image_url: "test")
user86 = User.new(email: "lg" , password: "password", image_url: "test")
user87 = User.new(email: "hqi" , password: "password", image_url: "test")
user88 = User.new(email: "azq" , password: "password", image_url: "test")
user89 = User.new(email: "sx" , password: "password", image_url: "test")
user90 = User.new(email: "dfg" , password: "password", image_url: "test")
user91 = User.new(email: "lfb" , password: "password", image_url: "test")
user92 = User.new(email: "jkq" , password: "password", image_url: "test")
user93 = User.new(email: "kgq" , password: "password", image_url: "test")
user94 = User.new(email: "ffc" , password: "password", image_url: "test")
user95 = User.new(email: "ike" , password: "password", image_url: "test")
user96 = User.new(email: "nqw" , password: "password", image_url: "test")
user97 = User.new(email: "dln" , password: "password", image_url: "test")
user98 = User.new(email: "dll" , password: "password", image_url: "test")
user99 = User.new(email: "ddp" , password: "password", image_url: "test")
user100 = User.new(email: "mjr" , password: "password", image_url: "test")
user101 = User.new(email: "ijg" , password: "password", image_url: "test")
user102 = User.new(email: "das" , password: "password", image_url: "test")
user103 = User.new(email: "gmy" , password: "password", image_url: "test")
user104 = User.new(email: "mly" , password: "password", image_url: "test")
user105 = User.new(email: "gt" , password: "password", image_url: "test")
user106 = User.new(email: "mtl" , password: "password", image_url: "test")
user107 = User.new(email: "htj" , password: "password", image_url: "test")
user108 = User.new(email: "giy" , password: "password", image_url: "test")
user109 = User.new(email: "dcv" , password: "password", image_url: "test")
user110 = User.new(email: "fbi" , password: "password", image_url: "test")
user111 = User.new(email: "gap" , password: "password", image_url: "test")
user112 = User.new(email: "kxd" , password: "password", image_url: "test")
user113 = User.new(email: "itl" , password: "password", image_url: "test")
user114 = User.new(email: "bvc" , password: "password", image_url: "test")
user115 = User.new(email: "cpp" , password: "password", image_url: "test")
user116 = User.new(email: "llq" , password: "password", image_url: "test")
user117 = User.new(email: "ltl" , password: "password", image_url: "test")
user118 = User.new(email: "jcp" , password: "password", image_url: "test")
user119 = User.new(email: "cor" , password: "password", image_url: "test")
user120 = User.new(email: "joa" , password: "password", image_url: "test")
user121 = User.new(email: "dmz" , password: "password", image_url: "test")
user122 = User.new(email: "mha" , password: "password", image_url: "test")
user123 = User.new(email: "exr" , password: "password", image_url: "test")
user124 = User.new(email: "cox" , password: "password", image_url: "test")
user125 = User.new(email: "aew" , password: "password", image_url: "test")
user126 = User.new(email: "npt" , password: "password", image_url: "test")
user127 = User.new(email: "fht" , password: "password", image_url: "test")
user128 = User.new(email: "ixd" , password: "password", image_url: "test")
user129 = User.new(email: "jii" , password: "password", image_url: "test")
user130 = User.new(email: "mns" , password: "password", image_url: "test")
user131 = User.new(email: "asf" , password: "password", image_url: "test")
user132 = User.new(email: "fqx" , password: "password", image_url: "test")
user133 = User.new(email: "bot" , password: "password", image_url: "test")
user134 = User.new(email: "dva" , password: "password", image_url: "test")
user135 = User.new(email: "fkb" , password: "password", image_url: "test")
user136 = User.new(email: "erz" , password: "password", image_url: "test")
user137 = User.new(email: "ftl" , password: "password", image_url: "test")
user138 = User.new(email: "akg" , password: "password", image_url: "test")
user139 = User.new(email: "jkh" , password: "password", image_url: "test")
user140 = User.new(email: "kan" , password: "password", image_url: "test")
user141 = User.new(email: "jxy" , password: "password", image_url: "test")
user142 = User.new(email: "gmj" , password: "password", image_url: "test")
user143 = User.new(email: "ipq" , password: "password", image_url: "test")
user144 = User.new(email: "fao" , password: "password", image_url: "test")
user145 = User.new(email: "iuu" , password: "password", image_url: "test")
user146 = User.new(email: "mxp" , password: "password", image_url: "test")
user147 = User.new(email: "fvd" , password: "password", image_url: "test")
user148 = User.new(email: "ihe" , password: "password", image_url: "test")
user149 = User.new(email: "hvv" , password: "password", image_url: "test")
user150 = User.new(email: "jms" , password: "password", image_url: "test")
user151 = User.new(email: "abg" , password: "password", image_url: "test")
user152 = User.new(email: "bhu" , password: "password", image_url: "test")
user153 = User.new(email: "evx" , password: "password", image_url: "test")
user154 = User.new(email: "mpu" , password: "password", image_url: "test")
user155 = User.new(email: "ijx" , password: "password", image_url: "test")
user156 = User.new(email: "caa" , password: "password", image_url: "test")
user157 = User.new(email: "elw" , password: "password", image_url: "test")
user158 = User.new(email: "ipg" , password: "password", image_url: "test")
user159 = User.new(email: "mne" , password: "password", image_url: "test")
user160 = User.new(email: "mqd" , password: "password", image_url: "test")
user161 = User.new(email: "ixx" , password: "password", image_url: "test")
user162 = User.new(email: "gwq" , password: "password", image_url: "test")
user163 = User.new(email: "bim" , password: "password", image_url: "test")
user164 = User.new(email: "ibt" , password: "password", image_url: "test")
user165 = User.new(email: "et" , password: "password", image_url: "test")
user166 = User.new(email: "cov" , password: "password", image_url: "test")
user167 = User.new(email: "ivi" , password: "password", image_url: "test")
user168 = User.new(email: "lcw" , password: "password", image_url: "test")
user169 = User.new(email: "hgx" , password: "password", image_url: "test")
user170 = User.new(email: "nby" , password: "password", image_url: "test")
user171 = User.new(email: "aku" , password: "password", image_url: "test")
user172 = User.new(email: "ega" , password: "password", image_url: "test")
user173 = User.new(email: "lpv" , password: "password", image_url: "test")
user174 = User.new(email: "gta" , password: "password", image_url: "test")
user175 = User.new(email: "fkl" , password: "password", image_url: "test")
user176 = User.new(email: "lgs" , password: "password", image_url: "test")
user177 = User.new(email: "qf" , password: "password", image_url: "test")
user178 = User.new(email: "beh" , password: "password", image_url: "test")
user179 = User.new(email: "eue" , password: "password", image_url: "test")
user180 = User.new(email: "dgd" , password: "password", image_url: "test")
user181 = User.new(email: "inh" , password: "password", image_url: "test")
user182 = User.new(email: "iir" , password: "password", image_url: "test")
user183 = User.new(email: "nkj" , password: "password", image_url: "test")
user184 = User.new(email: "jmu" , password: "password", image_url: "test")
user185 = User.new(email: "lkh" , password: "password", image_url: "test")
user186 = User.new(email: "doq" , password: "password", image_url: "test")
user187 = User.new(email: "neo" , password: "password", image_url: "test")
user188 = User.new(email: "kpx" , password: "password", image_url: "test")
user189 = User.new(email: "mc" , password: "password", image_url: "test")
user190 = User.new(email: "igw" , password: "password", image_url: "test")
user191 = User.new(email: "dl" , password: "password", image_url: "test")
user192 = User.new(email: "goa" , password: "password", image_url: "test")
user193 = User.new(email: "bff" , password: "password", image_url: "test")
user194 = User.new(email: "aif" , password: "password", image_url: "test")
user195 = User.new(email: "dea" , password: "password", image_url: "test")
user196 = User.new(email: "nga" , password: "password", image_url: "test")
user197 = User.new(email: "jsf" , password: "password", image_url: "test")
user198 = User.new(email: "hal" , password: "password", image_url: "test")
user199 = User.new(email: "lmm" , password: "password", image_url: "test")
user200 = User.new(email: "mfs" , password: "password", image_url: "test")
user201 = User.new(email: "amv" , password: "password", image_url: "test")
user202 = User.new(email: "dxv" , password: "password", image_url: "test")
user203 = User.new(email: "mwi" , password: "password", image_url: "test")
user204 = User.new(email: "mgl" , password: "password", image_url: "test")
user205 = User.new(email: "lrm" , password: "password", image_url: "test")
user206 = User.new(email: "mhc" , password: "password", image_url: "test")
user207 = User.new(email: "hwm" , password: "password", image_url: "test")
user208 = User.new(email: "eej" , password: "password", image_url: "test")
user209 = User.new(email: "etn" , password: "password", image_url: "test")
user210 = User.new(email: "dkp" , password: "password", image_url: "test")
user211 = User.new(email: "" , password: "password", image_url: "test")






user15.save!
user16.save!
user17.save!
user18.save!
user19.save!
user20.save!
user21.save!
user22.save!
user23.save!
user24.save!
user25.save!
user26.save!
user27.save!
user28.save!
user29.save!
user30.save!
user31.save!
user32.save!
user33.save!
user34.save!
user35.save!
user36.save!
user37.save!
user38.save!
user39.save!
user40.save!
user41.save!
user42.save!
user43.save!
user44.save!
user45.save!
user46.save!
user47.save!
user48.save!
user49.save!
user50.save!
user51.save!
user52.save!
user53.save!
user54.save!
user55.save!
user56.save!
user57.save!
user58.save!
user59.save!
user60.save!
user61.save!
user62.save!
user63.save!
user64.save!
user65.save!
user66.save!
user67.save!
user68.save!
user69.save!
user70.save!
user71.save!
user72.save!
user73.save!
user74.save!
user75.save!
user76.save!
user77.save!
user78.save!
user79.save!
user80.save!
user81.save!
user82.save!
user83.save!
user84.save!
user85.save!
user86.save!
user87.save!
user88.save!
user89.save!
user90.save!
user91.save!
user92.save!
user93.save!
user94.save!
user95.save!
user96.save!
user97.save!
user98.save!
user99.save!
user100.save!
user101.save!
user102.save!
user103.save!
user104.save!
user105.save!
user106.save!
user107.save!
user108.save!
user109.save!
user110.save!
user111.save!
user112.save!
user113.save!
user114.save!
user115.save!
user116.save!
user117.save!
user118.save!
user119.save!
user120.save!
user121.save!
user122.save!
user123.save!
user124.save!
user125.save!
user126.save!
user127.save!
user128.save!
user129.save!
user130.save!
user131.save!
user132.save!
user133.save!
user134.save!
user135.save!
user136.save!
user137.save!
user138.save!
user139.save!
user140.save!
user141.save!
user142.save!
user143.save!
user144.save!
user145.save!
user146.save!
user147.save!
user148.save!
user149.save!
user150.save!
user151.save!
user152.save!
user153.save!
user154.save!
user155.save!
user156.save!
user157.save!
user158.save!
user159.save!
user160.save!
user161.save!
user162.save!
user163.save!
user164.save!
user165.save!
user166.save!
user167.save!
user168.save!
user169.save!
user170.save!
user171.save!
user172.save!
user173.save!
user174.save!
user175.save!
user176.save!
user177.save!
user178.save!
user179.save!
user180.save!
user181.save!
user182.save!
user183.save!
user184.save!
user185.save!
user186.save!
user187.save!
user188.save!
user189.save!
user190.save!
user191.save!
user192.save!
user193.save!
user194.save!
user195.save!
user196.save!
user197.save!
user198.save!
user199.save!
user200.save!
user201.save!
user202.save!
user203.save!
user204.save!
user205.save!
user206.save!
user207.save!
user208.save!
user209.save!
user210.save!
