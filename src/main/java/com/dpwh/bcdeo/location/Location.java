package com.dpwh.bcdeo.location;

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
@Table(name = "location")
@Getter
@Setter
@NoArgsConstructor
public class Location {
    @Id
    @Generated
    private Long id;
    private String location;
}
