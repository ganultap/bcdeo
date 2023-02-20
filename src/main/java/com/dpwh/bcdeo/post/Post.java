package com.dpwh.bcdeo.post;



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
@Table(name = "post")
@Getter
@Setter
@NoArgsConstructor

public class Post {

    @Id
    @Generated

    private Long id;
    private String postdate;
    private String user;
    private String details;
}
