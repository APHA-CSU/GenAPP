package gov.apha.genapp;

public class User {

        private String username;
        private String name;
        private String organisation;
      
        public User(String username, String name, String organisation) {
          this.username = username;
          this.name = name;
          this.organisation = organisation;
        }
      
        /** 
        @Override
        public String toString() {
          return String.format(
              "Customer[id=%d, firstName='%s', lastName='%s']",
              id, firstName, lastName);
        }*/
      
        public String getUsername() {
            return username;
        }

        void setUsername(String username) {
            this.username = username;
        }

        public String getName() {
            return name;
        }

        void setName(String name) {
            this.name = name;
        }

        public String getOrganisation() {
            return organisation;
        }

        void setOrganisation(String organisation) {
            this.organisation = organisation;
        }

}
