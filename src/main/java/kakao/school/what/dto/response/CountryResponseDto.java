package kakao.school.what.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class CountryResponseDto {
    private Long countryId;
    private String name;
    private String imgUrl;
}
