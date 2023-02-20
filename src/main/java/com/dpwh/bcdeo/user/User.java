package com.dpwh.bcdeo.user;



import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.Generated;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Entity
@Table(name = "user")
@Getter
@Setter
@NoArgsConstructor

public class User {

    @Id
    @Generated
    private Long id;
    private String firstname;
    private String lastname;
    private String location;
    private String email;
}
